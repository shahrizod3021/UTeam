package it.team.uteam.payload;

import lombok.*;

import java.util.UUID;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResWorker {
    private UUID id;

    private String name;

    private String lastName;

    private String phoneNumber;

    private String password;

    private String email;

    private UUID photoId;
}
