package com.example.demo.dao;

import com.example.demo.model.Entry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface EntryRepository extends JpaRepository<Entry, Integer> {
    @Query(value = "SELECT e FROM Entry e WHERE e.email = ?1 ORDER BY e.count")
    List<Entry> findAllEntry(String email);
    @Modifying
    @Transactional
    @Query(value = "DELETE FROM Entry e WHERE e.email = ?1")
    void deleteAllEntry(String email);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM Entry e WHERE e.email = ?1 AND e.id = ?2")
    void deleteEntry(String email, Integer id);
}
