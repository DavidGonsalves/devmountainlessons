angular.module('fun').service('service1', function () {

	this.travelInfo = [{
		city: 'Burlington',
		desc: 'Burlington is the most populous city in the U.S. state of Vermont and the seat of Chittenden County. It is located 45 miles (72 km) south of the Canada–United States border and 94 miles (151 km) south of Canadas second most populous city of Montreal. The municipal population was 42,452 according to a 2015 U.S. census estimate. It is the least populous city in the U.S. to be the most populous within a state. A regional college town, Burlington is home to the University of Vermont (UVM) and Champlain College, a small private college. Vermonts largest hospital, the UVM Medical Center, is located within the municipal limits. In 2015, it became the first city in the U.S. to run completely on renewable energy.',
		price: 532
	}, {
		country: 'Rutland',
		desc: "The city of Rutland is the seat of Rutland County, Vermont, United States.[2][3] As of the 2010 census, the city had a total population of 16,495.[4] It is located approximately 65 miles (105 km) north of the Massachusetts state line and 20 miles (32 km) east of the New York state line. Rutland is the third largest city in the state of Vermont after Burlington and South Burlington. It is surrounded by the town of Rutland, which is a separate municipality. The downtown area of the city is listed as an historic district on the National Register of Historic Places.",
		price: 201
	}, {
		country: 'Montpelier',
		desc: "Montpelier /mɒntˈpiːliər/[3] is the capital city of the U.S. state of Vermont and the seat of Washington County. As the site of Vermont's state government, it is the least populous state capital in the United States.[4] The population was 7,855 at the 2010 census. However, the daytime population swells to about 21,000, due to the large number of jobs within city limits.[5] The Vermont College of Fine Arts and New England Culinary Institute are located in the municipality. It was named for Montpellier, in southern France.",
		price: 304
	}];
	
    this.weatherInfo = [{
        // Spring
        desc: 'Springtime in Vermont presents a wide range of weather conditions that make recreating more diverse than almost any other time of year. As winter slowly fades, Vermont’s sugarhouses steam into action to produce more than 40 percent of the country’s maple syrup. In 2016, the United State had its greatest maple syrup production year on record, and Vermont led the way. Maple Open House Weekend is a rite of spring in Vermont, and a perfect time to enjoy one of our state\'s top products. March and April also provide skiers and snowboarders an opportunity to enjoy a final two months of runs on Vermont’s legendary slopes. The long bluebird days of spring and corn snow conditions often make spring the best time of year to ski at Vermont’s mountains and resorts.'
    },{
        // Summer
        desc: 'This summer enjoy a trip to the cool mountains and crystal clear rivers and streams of Vermont. During the summer there is a constant pulse of energy, arts events, natural recreation, social gatherings and downtown festivities across the states inspiring landscape. There is plenty of summer action throughout the state whether you want to sip a summer beer at a local brewery or climb Vermont\'s tallest peaks. The warmer months provide outdoor enthusiasts, like you, the opportunity to enjoy the exceptional recreation that Vermont is renowned for. In Vermont you will find hiking, mountain biking, kayaking, golf and much more. Enjoy an invigorating morning playing outdoors and an evening in the hot tub gazing at the stars. Your family will thank you for it.'
    }, {
        // Fall
        desc:'With forests covering three-quarters of our state, and the highest percentage of vibrant maple trees in the country, Vermont can’t help but explode into amazing colors once the leaves start to turn. Whether you are touring the state on our scenic byways, or enjoying a crisp autumn hike outdoors, almost everywhere you look in Vermont during the fall months is alive with bursting reds, oranges and yellows. Adding to the natural beauty of autumn in Vermont are a variety of festivals, events and activities that help celebrate the season. Harvesting fruits and vegetables, visiting farms, pumpkin patches and corn mazes, and game hunting are among the host of outdoor things to do that make this such a special time of year.'
    },{
        // Winter
        desc:'No matter where you live, the weather is always a subject for small talk. But in Vermont, the weather comes up in almost every conversation, especially when it’s mid-January and temperatures have been stuck in the bone-chilling negatives for weeks. People bitch gripe about their cars not starting. Icy sidewalks. Burning through heating oil and firewood. Drafty windows and energy audits. Wind burn and the feeling of frost bite. Pipes freezing. Pipes bursting. Then you have people complaining about the January thaw—even if a warm up is a welcome respite for a few days—and the ice it causes. And then slippery, slimy mud season until a few months of sun, blue skies and 75 degree temps remind everyone just how wonderful living in Vermont can be.'
    }]

	
		
	
});