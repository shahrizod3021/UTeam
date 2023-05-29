package it.team.uteam.Controller;

import it.team.uteam.Entity.User;
import it.team.uteam.Repository.AuthRepository;
import it.team.uteam.Security.JwtTokenProvider;
import it.team.uteam.Service.AuthService;
import it.team.uteam.payload.GetMal;
import it.team.uteam.payload.ReqLogin;
import it.team.uteam.payload.ResToken;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {
    private final AuthRepository authRepository;
    private final JwtTokenProvider jwtTokenProvider;

    private final AuthenticationManager authenticationManager;

    private final AuthService authService;


    @PostMapping("/login")
    public HttpEntity<?> login(@RequestBody ReqLogin request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getPhoneNumber(), request.getPassword())
        );
        User user = authRepository.findUserByPhoneNumber(request.getPhoneNumber()).get();
        ResToken resToken = new ResToken(generateToken(request.getPhoneNumber()));
        return ResponseEntity.ok(getmalumot(user, resToken));
    }



    public GetMal getmalumot(User user, ResToken resToken) {
        return new GetMal(user, resToken);
    }


    public String generateToken(String phoneNumber) {
        User user = authRepository.findUserByPhoneNumber(phoneNumber).get();
        return jwtTokenProvider.generateToken(user.getId());
    }
}
