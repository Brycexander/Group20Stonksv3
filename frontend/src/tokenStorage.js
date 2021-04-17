exports.storeToken = function ( tok )
{
    try
    {
      localStorage.setItem('user_data', tok.token);
    }
    catch(e)
    {
      console.log(e.message);
    }
}

exports.storeList = function ( list )
{
    try
    {
      localStorage.setItem('stock_list', list);
    }
    catch(e)
    {
      console.log(e.message);
    }
}

exports.retrieveToken = function ()
{
    var ud;
    try
    {
      ud = localStorage.getItem('user_data');
    }
    catch(e)
    {
      console.log(e.message);
    }
    return ud;
}

exports.retrieveList = function ()
{
    var ud;
    try
    {
      ud = localStorage.getItem('stock_list');
    }
    catch(e)
    {
      console.log(e.message);
    }
    return ud;
}
