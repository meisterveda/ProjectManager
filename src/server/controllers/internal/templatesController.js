const Template = require('../../models/Template');

// @desc    Get all Templates
// @route   GET /api/v1/templates
// @access  public

exports.getTemplates = async (req, res, next) => {
    try {
        const templates = await Template.find();

        return res.status(200).json({
            success: true,
            count: templates.length,
            data: templates
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

// @desc    Add template
// @route   POST /api/v1/templates
// @access  public

exports.addTemplate = async (req, res, next) => {
    try {
        const { name, description, body, filetype, parent, secondaryparent, location} = req.body;
        const templates = await Template.create(req.body);

        return res.status(201).json({
            success: true,
            data: templates
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
};

// @desc    Delete template
// @route   DELETE /api/v1/templates/:id
// @access  public

exports.deleteTemplate = async (req, res, next) => {
    try {
        const templates = await Template.findById(req.params.id);
        if (!templates) {
            return res.status(404).json({
                success: false,
                error: 'No User Found'
            });
        };

        await templates.remove();

        return res.status(200).json({
            success: true,
            data: { }
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};