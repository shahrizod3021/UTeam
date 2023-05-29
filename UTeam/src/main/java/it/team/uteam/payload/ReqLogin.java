package it.team.uteam.payload;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReqLogin {
    private String phoneNumber;
    private String password;
}
