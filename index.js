const q = require('daskeyboard-applet');
const logger = q.logger;
const request = require('request-promise');

//how can I write correctly the API with different part
const apiUrl ="https://www.pollen.com/api/forecast/current/pollen/";



async function getAllergy (zipCode){
  const url = apiUrl + `${zipCode}`+ `-A Paw/3.1.8 (Macintosh; OS X/10.14.2) GCDHTTPRequest`
  logger.info ("Getting Allergy via URL " + url);

  console.log('valeur de l url avant la request', url);

  return request.get({
    url: url,
    //headers: generateServiceHeaders(), je ne sais ps si je dois vraiment l utilise pour des previsions perimees
    json: true
    //I don't know if the following code is usefull for me
  }).then(body => {
    const periods = body.periods;
    if (periods) {
      return body;
    } else {
      throw new Error("No periods returned.");
    }
  }).catch((error) => {
    logger.error("Caught error:", error);
    return null;
  })
}

//I need to code the getZoneName pour 



class AllergyAlert extends q.DesktopApp {
  constructor(){
    super();
    this.zoneName = null;
    //run every 30 mins
    this.pollingInterval = 1000 * 60 * 30;
    logger.info("Allergy Alert is ready to go!");
  }

    async run() {
      logger.info ("Running.");
     // const zoneName = await this.getZoneName();
      const test = await getAllergy('78759');
      console.log('valeur de test', test);


      /*if () // le taux est superieur a 4 on retourne un signal 
      
      {

        '{"applet":{"user": {"zipCode": "78759"}}}'

        const signal = new q.Signal({
          points: [points],
          name: `${zoneName}`,
          message: `<div><b> ${zoneName}:</b></div>` //faire afficher le taux avec le zip code
        });
        logger.info('Sending signal: ' + JSON.stringify(signal));
        return signal;
      }*/
    }
}


module.exports = {
  AllergyAlert : AllergyAlert,
  getAllergy : getAllergy
}

const appel = new AllergyAlert();