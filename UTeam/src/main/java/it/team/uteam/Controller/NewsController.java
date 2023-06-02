package it.team.uteam.Controller;

import it.team.uteam.Entity.Attachment;
import it.team.uteam.Entity.AttachmentContent;
import it.team.uteam.Entity.News;
import it.team.uteam.Repository.AttachmentContentRepository;
import it.team.uteam.Repository.AttachmentRepository;
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

    private final AttachmentRepository attachmentRepository;
    private final AttachmentContentRepository attachmentContentRepository;

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
    public HttpEntity<?> uploadVd(@PathVariable Integer id, @RequestParam(name = "vd") UUID vdId){
        News news = newsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("getNews"));
        news.setVideoId(vdId);
        newsRepository.save(news);
        return ResponseEntity.ok(new ApiResponse("saqlandi", true));
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteNews(@PathVariable Integer id){
        News news = newsRepository.findById(id).orElseThrow(() -> new RuntimeException("getNews"));
        newsRepository.delete(news);
        Attachment getNewsVideo = attachmentRepository.findById(news.getVideoId()).orElseThrow(() -> new ResourceNotFoundException("getNewsVideo"));
        AttachmentContent byAttachmentId = attachmentContentRepository.findByAttachmentId(getNewsVideo.getId());
        attachmentContentRepository.delete(byAttachmentId);
        attachmentRepository.delete(getNewsVideo);
        return ResponseEntity.ok(new ApiResponse("o'chirildi", true));
    }
}
