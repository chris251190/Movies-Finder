import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { GenresComponent } from './genres/genres.component';
import { PopularSeriesComponent } from './popular-series/popular-series.component';
import { SerieComponent } from './serie/serie.component';
import { ActorComponent } from './actor/actor.component';

export const appRoutes: Routes = [
    {path: '', component: MoviesComponent},
    {path: 'movie/:id', component: MovieComponent},
    {path: 'tv/:id', component: SerieComponent},
    {path: 'actor/:id', component: ActorComponent},
    {path: 'genres/:id/:name', component: GenresComponent},
    {path: 'upcoming', component: PopularSeriesComponent}, //hmmm do we really need 2 PopularSeriesComponents? I think 1 is enough
                                                            //let's find a better one for 'upcoming'
                                                            //I wonder if I can find it in the upcoming folder?
                                                            //noo, that would be too obvious...
    {path: 'popular/series', component: PopularSeriesComponent},
];
