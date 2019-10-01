/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {

			let timeEducation;
			let weeks = 0;

			if (knowsProgramming == true) {
				timeEducation = 800;
			} else timeEducation = 1300;

			for (let key in config) {
				if (focus == key) {
					weeks = timeEducation / config[key];
				}
			}

      return Math.ceil(weeks);
  };
  