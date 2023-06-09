package it.team.uteam.Service;

import it.team.uteam.Entity.Role;
import it.team.uteam.Entity.User;
import it.team.uteam.Repository.AuthRepository;
import it.team.uteam.Repository.RoleRepository;
import it.team.uteam.payload.ReqWorker;
import it.team.uteam.payload.ResWorker;
import it.team.uteam.payload.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class WorkerService {
    private final AuthRepository authRepository;

    private final RoleRepository roleRepository;

    public List<ResWorker> WorkerList() {
        List<User> all = authRepository.findAll();
        List<ResWorker> resWorkers = new ArrayList<>();
        for (User user : all) {
            resWorkers.add(
                    ResWorker.builder()
                            .id(user.getId())
                            .email(user.getEmail())
                            .lastName(user.getLastName())
                            .name(user.getName())
                            .photoId(user.getPhotoId())
                            .password(user.getPassword())
                            .phoneNumber(user.getPhoneNumber())
                            .build()
            );

        }
        return resWorkers;
    }

    public User addWorker(ReqWorker reqWorker) {
        boolean exist = authRepository.existsUserByPhoneNumber(reqWorker.getPhoneNumber());
        boolean emailExist = authRepository.existsUserByEmail(reqWorker.getEmail());
        Role getRole = roleRepository.findById(3).orElseThrow(() -> new ResourceNotFoundException("getRole"));
        if (!exist) {
            if (!emailExist) {
                User build = User.builder()
                        .email(reqWorker.getEmail())
                        .lastName(reqWorker.getLastName())
                        .name(reqWorker.getName())
                        .phoneNumber(reqWorker.getPhoneNumber())
                        .role(getRole)
                        .build();
                return authRepository.save(build);
            }
            return null;
        }
        return null;
    }
    public ApiResponse editWorker(UUID id,Integer projects){
        Optional<User> byId = authRepository.findById(id);
        if (byId.isPresent()){
            User user = byId.get();
            user.setProjects(projects);
            authRepository.save(user);
            return new ApiResponse("worker is successfully edit ",true);
        }
        return new ApiResponse("worker isn't successfully edit ",false);
    }
    public ApiResponse deleteWorker(UUID uuid){
        Optional<User> byId = authRepository.findById(uuid);
        if (byId.isPresent()){
            User user = byId.get();
            authRepository.delete(user);
            return new ApiResponse("worker is successfully delete ",true);
        }
        return new ApiResponse("worker isn't successfully  ",false);

    }
}
