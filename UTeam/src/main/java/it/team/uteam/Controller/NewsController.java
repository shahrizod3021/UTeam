package it.team.uteam.Controller;

import it.team.uteam.Entity.News;
import it.team.uteam.Repository.NewsRepository;
import it.team.uteam.payload.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/news")
public class NewsController {

    private final NewsRepository newsRepository;

    @GetMapping("/list")
    public HttpEntity<?> getNews (){
        List<News> all = newsRepository.findAll();
        return ResponseEntity.ok(all);
    }

    @PostMapping
    public HttpEntity<?> addNews(@RequestParam(name = "name")String name, @RequestParam(name = "description")String description){
        News build = News.builder().description(description).build();
        build.setName(name);
        News save = newsRepository.save(build);
        return ResponseEntity.ok(save);
    }

    @PutMapping("/upload/{id}")
    public HttpEntity<?> uploadVd(@PathVariable Integer id, @RequestParam(name = "vd")UUID vd){
        News news = newsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("getNews"));
        news.setVideoId(vd);
        newsRepository.save(news);
        return ResponseEntity.ok(new ApiResponse("saqlandi", true));
    }
}
