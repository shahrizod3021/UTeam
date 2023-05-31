package it.team.uteam.Controller;

import it.team.uteam.Entity.Projects;
import it.team.uteam.Repository.ProjectRepository;
import it.team.uteam.payload.ApiResponse;
import javafx.beans.property.ReadOnlySetProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.http11.Http11InputBuffer;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectsController {

    private final ProjectRepository projectRepository;

    @GetMapping
    public HttpEntity<?> getProjects(){
        List<Projects> all = projectRepository.findAll();
        return ResponseEntity.ok(all);
    }

    @PostMapping
    public HttpEntity<?> addProjects(@RequestParam(name = "name") String name, @RequestParam(name = "description") String description, @RequestParam(name = "link") String link, @RequestParam(name = "who") String who){
        Projects build = Projects.builder().who(who).description(description).link(link).build();
        build.setName(name);
        Projects save = projectRepository.save(build);
        return ResponseEntity.ok(save);
    }

    @PutMapping("/upload/{id}")
    public HttpEntity<?> uploadProjectPhoto(@PathVariable Integer id, @RequestParam(name = "photoId")UUID photoId){
        Projects getProject = projectRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("getProject"));
        getProject.setPhotoId(photoId);
        projectRepository.save(getProject);
        return ResponseEntity.ok(new ApiResponse("project saqlnadi", true));
    }
}
