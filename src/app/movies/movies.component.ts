import { Component } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";



@Component ({
    selector:'movies',
    templateUrl : 'movies.component.html'
})
export class MoviesComponent {
title='Movie list';
movies!: Movie[];
selectedMovie!:Movie;
constructor(private movieService:MovieService){

}
ngOnInit():void{
    this.getMovies();
}
onSelect(movie:Movie){
 this.selectedMovie=movie;
}

getMovies():void {
     this.movieService.getMovies()
                             .subscribe((movies: Movie[]) => {
                                 this.movies = movies;
                             });
}
add(name:string,imageUrl:string,description:string):void{
    this.movieService.add({
      name,
      imageUrl,
      description
    }as Movie).subscribe(movie=> this.movies.push(movie));
}
deletee(movie:Movie):void{
    this.movies = this.movies.filter(m=>m!==movie);
    this.movieService.delete(movie).subscribe();
}
}