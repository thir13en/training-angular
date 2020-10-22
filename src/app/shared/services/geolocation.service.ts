@Injectable({
  providedIn: 'root',
})
export class GeolocationService extends Observable<Position> {
  constructor(
    @Inject(GEOLOCATION) geolocationRef: Geolocation) {


    super(subscriber => {

      geolocationRef.watchPosition(
        position => subscriber.next(position),
        positionError => subscriber.error(positionError),
      );
    });
  }
}
