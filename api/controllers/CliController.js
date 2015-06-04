/**
 * CliController
 *
 * @description :: Server-side logic for managing CLI
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


  /**
   * Command execution
   * @param  {String} req.body.command [command ro execute]
   * @return {JSON}     [result or error]
   */
  run: function (req, res) {

    // Check for valid command string in request
    if (req.body === undefined || !req.body.command || req.body.command.trim().length === 0){
        return res.redirect('/cli/enter');
    }

    // Split string to array as `child_process` needs array
    var command = req.body.command.split(" "),
        err    = [],
        result = "";

    // Get needed module and execute command
    var spawn  = require('child_process').spawn,
        run = spawn(command.splice(0, 1)[0], command);

    run.stdout.on('data', function (data) {
        result =  result + data.toString();
    });

    run.stderr.on('data', function (data) {
        err.push(data.toString());
        console.log(data);
    });

    run.on('error', function (error) {
        err.push(error.toString());
        console.log(error);
        run.stdin.end();
    });

    run.on('close', function (code) {

        if (code !== 0) {
            err.push('ps process exited with code ' + code);
        }

        run.stdin.end();

        // Return error
        if (err.length > 0){
            res.status(500);
            return res.json({errors: err});
        }

        //Return data
        return res.ok(result);

    });
  },

  /**
   * Simple function to render view with command line
   */
  enter: function(req, res){

    return res.view();
  }
};
