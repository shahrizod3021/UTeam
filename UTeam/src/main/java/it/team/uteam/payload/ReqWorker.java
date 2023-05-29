package it.team.uteam.payload;

import lombok.*;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReqWorker {
    private String name;

    private String lastName;

    private String phoneNumber;

    private String password;

    private String email;

}
