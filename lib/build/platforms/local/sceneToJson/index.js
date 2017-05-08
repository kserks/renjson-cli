
const 
  createScene                 = require('./create-scene'),
  addLabels                   = require('./add-labels');



function sceneToJson(__src, __dist, notify,__assetsDist){


createScene(__src, __assetsDist)
      .then(function(scenesObj){
            addLabels(scenesObj, __src, __dist).then((data)=>{
                  notify(null, data);
                  //process.exit(0);
            }).catch((e)=>{
                  notify(err);
                 // process.exit(0);
            });/*addLabels*/
      }).catch(function(err){
              notify(err);
              //process.exit(0);
      });/*createScene*/
 
};/*sceneToJson*/


module.exports = sceneToJson;