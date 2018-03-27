package com.ifmg.tcc.repository;

import com.ifmg.tcc.TADs.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
/**
 * Created by lukew on 20/03/2018.
 */
@Repository
public interface AlunoRepository extends JpaRepository<Aluno,Integer> {
}
