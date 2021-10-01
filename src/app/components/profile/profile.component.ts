import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
@Injectable()
export class ProfileComponent implements OnInit {
  public profile: any = [];
  public repos: any = [];
  public username!: string;
  public isShowDiv = false;
  public skeletonloader = true;
  public repoName!: string;

  constructor(private profileService: ProfileService) {}

  public totalLength!: number;
  public page: number = 1;

  findProfile() {
    this.isShowDiv = !this.isShowDiv;
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe((profile: any) => {
      console.log(profile);
      this.profile = profile;
    });

    this.profileService.getProfileRepos().subscribe((repos: any) => {
      console.log(repos);
      this.repos = repos;

      this.totalLength = repos.length;
    });
    this.skeletonloader = false;
  }

  viewDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  ngOnInit(): void {}
}
