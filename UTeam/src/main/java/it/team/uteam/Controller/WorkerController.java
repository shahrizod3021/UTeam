package it.team.uteam.Controller;

import it.team.uteam.Entity.User;
import it.team.uteam.Repository.AuthRepository;
import it.team.uteam.Service.WorkerService;
import it.team.uteam.payload.ReqWorker;
import it.team.uteam.payload.ResWorker;
import it.team.uteam.payload.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/worker")
@RequiredArgsConstructor
public class WorkerController {

    private final AuthRepository authRepository;
    private final WorkerService workerService;

    @GetMapping("/{id}")
    public HttpEntity<?> getOne(@PathVariable UUID id) {
        if (authRepository.findById(id).isPresent()) {
            User getOneWorker = authRepository.findById(id).get();
            return ResponseEntity.ok(getOneWorker);
        }
        return null;
    }

    @GetMapping("/list")
    public HttpEntity<?> WorkerList() {
        List<User> all = authRepository.findAll();
        return ResponseEntity.ok(all);
    }

    @PostMapping("/addWorker")
    public HttpEntity<?> addWorker(@RequestBody ReqWorker reqWorker) {
        User user = workerService.addWorker(reqWorker);
        return ResponseEntity.status(user != null ? 200 : 409).body(user);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editWorker(@PathVariable UUID id,@RequestParam(name = "projects")Integer projects) {
        ApiResponse apiResponse = workerService.editWorker(id,projects);
        return ResponseEntity.status(apiResponse.isSuccess()? 200 : 409).body(apiResponse);
    }

    @PutMapping("/upload/{id}")
    public HttpEntity<?> uploadWorkerPhoto (@PathVariable UUID id, @RequestParam(name = "photoId") UUID photoId) {
        User getUser = authRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("getUser"));
        getUser.setPhotoId(photoId);
        authRepository.save(getUser);
        return ResponseEntity.ok(new ApiResponse("worker saqlandi",true));
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteWorker(@PathVariable UUID id) {
        ApiResponse apiResponse = workerService.deleteWorker(id);
        return ResponseEntity.status(apiResponse.isSuccess()? 200 : 409).body(apiResponse);
    }

}
