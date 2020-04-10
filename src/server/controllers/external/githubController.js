// @desc    Get Github
// @route   GET /api/external/github
// @access  public

exports.getGithub = async (req, res, next) => {
    try {
       
        /* console.log(request.params);
        const latlon = request.params.latlon.split(',');
        console.log(latlon);
        const lat = latlon[0];
        const lon = latlon[1];
        console.log(lat, lon);
        const api_key = process.env.API_KEY;
        const weather_url = `https://api.darksky.net/forecast/${api_key}/${lat},${lon}/?units=si`;
        const weather_response = await fetch(weather_url);
        const weather_data = await weather_response.json(); */

        return res.json({ success: true });
        /* return res.status(200).json({
            success: true,
            count: users.length,
            data: users
        }); */
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};