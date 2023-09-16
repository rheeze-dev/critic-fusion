package com.wcci.criticfusion.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.GenerationType;

@Entity
public class Games {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String title;
    private String description;
    private String genre;
    private String ageRating;
    private String studio;
    private String actor;
    private int releaseDate;
    private String byTopic;
    private String gameSystem;

  public Games() {
  }

  public Games(String title, String description, String genre, String ageRating, String studio, String actor, int releaseDate, String byTopic, String gameSystem) {
    this.title = title;
    this.description = description;
    this.genre = genre;
    this.ageRating = ageRating;
    this.studio = studio;
    this.actor = actor;
    this.releaseDate = releaseDate;
    this.byTopic = byTopic;
    this.gameSystem = gameSystem;
  }


    public Long getId() {
      return Id;
    }
    public void setId(Long id) {
      this.Id = id;
    }
    public String getTitle() {
      return title;
    }
    public void setTitle(String title) {
      this.title = title;
    }
    public String getDescription() {
      return description;
    }
    public void setDescription(String description) {
      this.description = description;
    }

  public String getGenre() {
    return this.genre;
  }

  public void setGenre(String genre) {
    this.genre = genre;
  }

  public String getAgeRating() {
    return this.ageRating;
  }

  public void setAgeRating(String ageRating) {
    this.ageRating = ageRating;
  }

  public String getStudio() {
    return this.studio;
  }

  public void setStudio(String studio) {
    this.studio = studio;
  }

  public String getActor() {
    return this.actor;
  }

  public void setActor(String actor) {
    this.actor = actor;
  }

  public int getReleaseDate() {
    return this.releaseDate;
  }

  public void setReleaseDate(int releaseDate) {
    this.releaseDate = releaseDate;
  }

  public String getByTopic() {
    return this.byTopic;
  }

  public void setByTopic(String byTopic) {
    this.byTopic = byTopic;
  }

  public String getGameSystem() {
    return this.gameSystem;
  }

  public void setGameSystem(String gameSystem) {
    this.gameSystem = gameSystem;
  }

    
}
