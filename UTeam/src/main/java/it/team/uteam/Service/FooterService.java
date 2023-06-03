package it.team.uteam.Service;

import it.team.uteam.Entity.Footer;
import it.team.uteam.Repository.FooterRepo;
import it.team.uteam.payload.ApiResponse;
import it.team.uteam.payload.ReqFooter;
import it.team.uteam.payload.ResFooter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FooterService {

    private final FooterRepo footerRepo;

    public List<ResFooter> getFooter() {
        List<ResFooter> footers = new ArrayList<>();
        for (Footer footer : footerRepo.findAll()) {
            ResFooter build = ResFooter.builder()
                    .id(footer.getId())
                    .name(footer.getName())
                    .link(footer.getLink())
                    .icon(footer.getIcon())
                    .build();
            footers.add(build);
        }
        return footers;
    }

    public Footer addFooter(ReqFooter reqFooter) {
        if (!footerRepo.existsFooterByNameEqualsIgnoreCase(reqFooter.getName())) {
            Footer footer = new Footer(reqFooter.getLink(), reqFooter.getIcon());
            footer.setName(reqFooter.getName());
            return footerRepo.save(footer);
        }
        return null;
    }

    public ApiResponse editFooter(Integer id, ReqFooter reqFooter) {
        Optional<Footer> byId = footerRepo.findById(id);
        if (byId.isPresent()) {
            Footer footer = byId.get();
            if (reqFooter.getIcon().trim().length() != 0) {
                footer.setIcon(reqFooter.getIcon());
            }
            if (reqFooter.getName().trim().length() != 0) {
                if (!footerRepo.existsCategoryByNameEqualsIgnoreCaseAndIdNot(reqFooter.getName(), footer.getId())) {
                    footer.setName(reqFooter.getName());
                }
            }
            if (reqFooter.getLink().trim().length() != 0) {
                footer.setLink(reqFooter.getLink());
            }
            footerRepo.save(footer);
            return new ApiResponse("suuccess", true);
        }
        return new ApiResponse("not found", false);
    }

    public ApiResponse deleteFooter(Integer id) {
        Footer category1 = footerRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("getCategory"));
        footerRepo.delete(category1);
        Optional<Footer> byId = footerRepo.findById(id);
        if (byId.isPresent()) {
            Footer category = byId.get();
            footerRepo.delete(category);
            return new ApiResponse("deleted", true);
        }
        return new ApiResponse("not found", false);
    }
}
