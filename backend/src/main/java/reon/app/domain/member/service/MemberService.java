package reon.app.domain.member.service;

import org.springframework.stereotype.Service;
import reon.app.domain.member.entity.Member;

@Service
public interface MemberService {
    Member findById(Long id);
    Member findByEmail(String email);
//    void modify(MemberModifyRequest memberModifyRequest);
//
//
//    void updateProfileImg(MultipartFile multipartFile, Long memberId);

    void removeProfileImg(Long memberId);

    void delete(String loginId);
}
