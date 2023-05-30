package it.team.uteam.payload;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResMessages {
    private Integer id;
    private String name;
    private String phoneNumber;
}
