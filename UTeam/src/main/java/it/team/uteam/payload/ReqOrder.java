package it.team.uteam.payload;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReqOrder {
    private String name;
    private String lastName;
    private String phoneNumber;
    private String email;
    private String why;
    private String companyName;
}
