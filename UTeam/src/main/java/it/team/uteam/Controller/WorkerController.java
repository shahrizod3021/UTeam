package it.team.uteam.Controller;

import it.team.uteam.Entity.User;
import it.team.uteam.Repository.AuthRepository;
import it.team.uteam.Service.WorkerService;
import it.team.uteam.payload.ReqWorker;
import it.team.uteam.payload.ResWorker;
import it.team.uteam.payload.ApiResponse;
import lombok.RequiredArgsConstructor;
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
        List<ResWorker> resWorkers = workerService.WorkerList();
        return ResponseEntity.ok(resWorkers);
    }

    @PostMapping("/addWorker")
    public HttpEntity<?> addWorker(@RequestBody ReqWorker reqWorker) {
        ApiResponse apiResponse = workerService.addWorker(reqWorker);
        return ResponseEntity.status(apiResponse.isSuccess()? 200 : 409).body(apiResponse);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editWorker(@PathVariable UUID id,@RequestBody ReqWorker reqWorker) {
        ApiResponse apiResponse = workerService.editWorker(id,reqWorker);
        return ResponseEntity.status(apiResponse.isSuccess()? 200 : 409).body(apiResponse);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteWorker(@PathVariable UUID id) {
        ApiResponse apiResponse = workerService.deleteWorker(id);
        return ResponseEntity.status(apiResponse.isSuccess()? 200 : 409).body(apiResponse);
    }
}
