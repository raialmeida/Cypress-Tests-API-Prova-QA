const Joi = require('joi');
/**
 * Schema POST do endpoint Boards
 */

export const boardSchema = Joi.object({
    id: Joi.string().length(24).hex().required(),
    name: Joi.string().min(1).max(100).required(),
    desc: Joi.string().allow('').default(''),
    descData: Joi.any().allow(null),
    closed: Joi.boolean().required(),
    idOrganization: Joi.string().length(24).hex().allow(null).required(),
    idEnterprise: Joi.any().allow(null),
    pinned: Joi.boolean().required(),
    url: Joi.string().uri().required(),
    shortUrl: Joi.string().uri().required(),
    prefs: Joi.object({
        permissionLevel: Joi.string().valid('private', 'org', 'public').required(),
        hideVotes: Joi.boolean().required(),
        voting: Joi.string().valid('disabled', 'members', 'public').required(),
        comments: Joi.string().valid('disabled', 'members', 'org', 'public').required(),
        invitations: Joi.string().valid('members').required(),
        selfJoin: Joi.boolean().required(),
        cardCovers: Joi.boolean().required(),
        showCompleteStatus: Joi.boolean().required(),
        cardCounts: Joi.boolean().required(),
        isTemplate: Joi.boolean().required(),
        cardAging: Joi.string().valid('regular', 'pirate').required(),
        calendarFeedEnabled: Joi.boolean().required(),
        hiddenPluginBoardButtons: Joi.array().items(Joi.string()).required(),
        switcherViews: Joi.array().items(
            Joi.object({
                viewType: Joi.string().required(),
                enabled: Joi.boolean().required(),
            })
        ).required(),
        autoArchive: Joi.any().allow(null),
        background: Joi.string().required(),
        backgroundColor: Joi.string().allow(null),
        backgroundDarkColor: Joi.string().allow(null),
        backgroundImage: Joi.string().uri().allow(null),
        backgroundDarkImage: Joi.string().uri().allow(null),
        backgroundImageScaled: Joi.array().items(
            Joi.object({
                url: Joi.string().uri().required(),
                width: Joi.number().integer().min(1).required(),
                height: Joi.number().integer().min(1).required(),
            })
        ).allow(null),
        backgroundTile: Joi.boolean().required(),
        backgroundBrightness: Joi.string().valid('dark', 'light').required(),
        sharedSourceUrl: Joi.string().uri().allow(null),
        backgroundBottomColor: Joi.string().allow(null),
        backgroundTopColor: Joi.string().allow(null),
        canBePublic: Joi.boolean().required(),
        canBeEnterprise: Joi.boolean().required(),
        canBeOrg: Joi.boolean().required(),
        canBePrivate: Joi.boolean().required(),
        canInvite: Joi.boolean().required(),
    }).required(),
    labelNames: Joi.object().pattern(
        Joi.string(),
        Joi.string().allow('')
    ).required(),
    limits: Joi.object().required().unknown(true),
}).required();