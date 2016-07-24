import Dispatcher from '../dispatcher/Dispatcher.js';
import yt from '../utils/yt.js';

class Tracks {

	addTrack(track) {
		yt.download(track);
		Dispatcher.dispatch({
			type: 'update_track',
			track: track
		});
	}

	updateTrack(track){
		Dispatcher.dispatch({
			type: 'update_track',
			track: track
		});
	}

	removeTrack(track){
		Dispatcher.dispatch({
			type: 'remove_track',
			track: track
		});
	}

	searchTracks(q){
		Dispatcher.dispatch({
			type: 'clear_search'
		});
		yt.search(q);
	}

	getNextTracks(){
		yt.getNext();
	}

	setRightTrack(track){
		Dispatcher.dispatch({
			type: 'set_right_track',
			track: track
		});
	}

	setLeftTrack(track){
		Dispatcher.dispatch({
			type: 'set_left_track',
			track: track,
		});
	}

	setCrossfadeValue(value){
		Dispatcher.dispatch({
			type: 'set_crossfade_value',
			value: value
		})
	}

}

const instance = new Tracks();

export default instance;
