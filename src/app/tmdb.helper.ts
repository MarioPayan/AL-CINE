export class TmdbHelper {
  
  baseUrlSrc = "http://image.tmdb.org/t/p/w300";
  
  constructor() { }

  getUrlSrc(src: string): string {
    if(src){
    return `${this.baseUrlSrc}${src}`;
    }else{
      return `assets/images/no-preview.png`;
    }
  }

  getImgNoFound(): string {
    return `assets/images/no-found.png`;
  }

  sortMovies(movies): any[] {
    movies.sort((movieA: any, movieB: any) => {
      if (movieA.release_date == null) return 1;
      if (movieB.release_date == null) return -1;
      let dateA = movieA.release_date.split('-');
      let dateB = movieB.release_date.split('-');
      if (dateA[0] > dateB[0]) {
        return -1;
      } else if (dateA[0] < dateB[0]) {
        return 1;
      } else if (dateA[1] > dateB[1]) {
        return -1;
      } else if (dateA[1] < dateB[1]) {
        return 1;
      } else if (dateA[2] > dateB[2]) {
        return -1;
      } else if (dateA[2] < dateB[2]) {
        return 1;
      } else {
        return 0;
      }
    });
    return movies;
  }
}
