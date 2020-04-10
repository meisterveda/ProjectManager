const Project = require('../../models/Project');

// @desc    GET all projects
// @route   GET /api/v1/projects
// @access  public

exports.getProjects = async (req, res, next) => {
    try {
        const projects = await Project.find();

        return res.status(200).json({
            success: true,
            count: projects.length,
            data: projects
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

// @desc    Add Project
// @route   POST /api/v1/projects
// @access  public

exports.addProject = async (req, res, next) => {
    try {
        const { name, description, technology, createdby, timeofcreation, lastmodifiedby, administrator, gitname} = req.body;
        const project = await Project.create(req.body);

        return res.status(201).json({
            success: true,
            data: project
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

// @desc    Delete Project
// @route   DELETE /api/v1/projects/:id
// @access  public

exports.deleteProject = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({
                success: false,
                error: 'No Project Found'
            });
        };

        await project.remove();

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

// @desc    Update Project
// @route   UPDATE /api/v1/projects/:id
// @access  public

exports.updateProject = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({
                success: false,
                error: 'No Project Found'
            });
        };

        await project.remove();

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