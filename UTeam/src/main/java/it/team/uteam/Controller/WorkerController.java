package it.team.uteam.Controller;

import it.team.uteam.Entity.User;
import it.team.uteam.Repository.AuthRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/worker")
@RequiredArgsConstructor
public class WorkerController {

    private final AuthRepository authRepository;

    @GetMapping("/{id}")
    public HttpEntity<?> getOne(@PathVariable UUID id){
        if (authRepository.findById(id).isPresent()){
            User getOneWorker = authRepository.findById(id).get();
            return ResponseEntity.ok(getOneWorker);
        }
        return null;
    }
}
