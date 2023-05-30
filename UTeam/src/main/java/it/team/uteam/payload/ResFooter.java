package it.team.uteam.payload;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResFooter {
    private Integer id;
    private String name;
    private String link;

    private String icon;
}
