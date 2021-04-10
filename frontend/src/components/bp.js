require("dotenv").config();

exports.buildPath = function ( route )
{
    const app_name = 'group20-stocksimulatorv2';
    if (true) 
    {
        return 'https://' + app_name +  '.herokuapp.com/' + route;
    }
    else
    {        
        return 'http://localhost:3000/' + route;
    }
}
