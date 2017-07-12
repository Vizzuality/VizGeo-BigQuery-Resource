import turfInside from '@turf/inside';
import { point, polygon } from '@turf/helpers';
import turfIntersect from '@turf/intersect';


function inside(long, lat, geometry) {
	return turfInside(point([long, lat]), polygon(geometry))
}


function intersect(geom1, geom2) {
	return turfIntersect(geom1, geom2) !== undefined;
}

export {
	inside,
	intersect
}
