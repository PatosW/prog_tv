import * as svc from '../services/scheduleService.js';

export async function listChannels(req, res, next) {
  try {
    const { category, search, genre } = req.query;
    let channels = await svc.getChannelsWithSchedule({ category, search });

    // Genre filter (post-query, lightweight)
    if (genre && genre !== 'all') {
      channels = channels
        .map(ch => ({
          ...ch,
          programs: ch.programs.filter(p => p.genre === genre),
        }))
        .filter(ch => ch.programs.length > 0);
    }

    res.json({
      data: channels,
      il_time: svc.getILTime().toISOString(),
      count: channels.length,
    });
  } catch (err) {
    next(err);
  }
}

export async function getChannel(req, res, next) {
  try {
    const channel = await svc.getChannelById(req.params.id);
    if (!channel) return res.status(404).json({ error: 'Channel not found' });
    res.json({ data: channel });
  } catch (err) {
    next(err);
  }
}
