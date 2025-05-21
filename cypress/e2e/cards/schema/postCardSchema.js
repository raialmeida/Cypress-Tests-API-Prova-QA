const Joi = require('joi');
/**
 * Schema POST do endpoint card
 */
export const CardSchema = Joi.object({
    id: Joi.string().length(24).hex().required(),
    address: Joi.string().allow('<string>', null, ''),
    badges: Joi.object({
        attachments: Joi.number().integer().min(0).required(),
        fogbugz: Joi.string().allow('', null).required(),
        checkItems: Joi.number().integer().min(0).required(),
        checkItemsChecked: Joi.number().integer().min(0).required(),
        checkItemsEarliestDue: Joi.string().isoDate().allow(null).optional(),
        comments: Joi.number().integer().min(0).required(),
        description: Joi.boolean().required(),
        due: Joi.string().isoDate().allow(null).optional(),
        dueComplete: Joi.boolean().required(),
        lastUpdatedByAi: Joi.boolean().required(),
        start: Joi.string().isoDate().allow(null).optional(),
        externalSource: Joi.string().allow(null).optional(),
        attachmentsByType: Joi.object({
            trello: Joi.object({
                board: Joi.number().integer().min(0).required(),
                card: Joi.number().integer().min(0).required(),
            }).required(),
        }).required(),
        location: Joi.boolean().required(),
        votes: Joi.number().integer().min(0).required(),
        maliciousAttachments: Joi.number().integer().min(0).required(),
        viewingMemberVoted: Joi.boolean().required(),
        subscribed: Joi.boolean().required(),
    }).required(),
    checkItemStates: Joi.array().items(Joi.string()).required(),
    closed: Joi.boolean().required(),
    dueComplete: Joi.boolean().required(),
    dateLastActivity: Joi.string().isoDate().required(),
    desc: Joi.string().allow('', null).required(),
    descData: Joi.object({
        emoji: Joi.object().pattern(Joi.string(), Joi.any()).optional(),
    }).required(),
    due: Joi.string().isoDate().allow(null).optional(),
    dueReminder: Joi.string().allow(null).optional(),
    email: Joi.string().allow(null).optional(),
    idBoard: Joi.string().length(24).hex().required(),
    idChecklists: Joi.array().items(
        Joi.object({
            id: Joi.string().length(24).hex().required(),
        })
    ).required(),
    idList: Joi.string().length(24).hex().required(),
    idMembers: Joi.array().items(Joi.string().length(24).hex()).required(),
    idMembersVoted: Joi.array().items(Joi.string().length(24).hex()).required(),
    idShort: Joi.number().integer().min(0).required(),
    idAttachmentCover: Joi.string().allow(null).optional(),
    labels: Joi.array().items(Joi.string()).required(),
    idLabels: Joi.array().items(
        Joi.object({
            id: Joi.string().length(24).hex().required(),
            idBoard: Joi.string().length(24).hex().required(),
            name: Joi.string().allow('').required(),
            color: Joi.string().allow('', null).required(),
        })
    ).required(),
    manualCoverAttachment: Joi.boolean().required(),
    name: Joi.string().allow('').min(0).required(),
    nodeId: Joi.string().required(),
    pinned: Joi.boolean().required(),
    pos: Joi.number().required(),
    shortLink: Joi.string().length(8).required(),
    shortUrl: Joi.string().uri().required(),
    start: Joi.string().isoDate().allow(null).optional(),
    subscribed: Joi.boolean().required(),
    url: Joi.string().uri().required(),
    cover: Joi.object({
        idAttachment: Joi.string().allow(null).optional(),
        color: Joi.string().allow(null).optional(),
        idUploadedBackground: Joi.string().allow(null).optional(),
        size: Joi.string().valid('normal', 'full').allow(null).optional(),
        brightness: Joi.string().valid('light', 'dark').allow(null).optional(),
        idPlugin: Joi.string().allow(null).optional(),
    }).allow(null),
    isTemplate: Joi.boolean().required(),
    cardRole: Joi.string().allow(null).optional(),
    mirrorSourceId: Joi.string().allow(null).optional(),
    attachments: Joi.array().items(Joi.any()).required(),
    stickers: Joi.array().items(Joi.any()).required(),
    limits: Joi.object().required().unknown(true),
}).required();