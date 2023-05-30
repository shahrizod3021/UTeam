package it.team.uteam.payload;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReqMessages {
    private String name;
    private String phoneNumber;
    private String message;
}
