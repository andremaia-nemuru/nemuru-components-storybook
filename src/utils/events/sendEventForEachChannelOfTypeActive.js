const getChannelsWithActiveType = (type, channels) => {
  const channelsWithActiveType = [];
  Object.keys(channels).forEach((channelName) => {
    isEventTypeActiveByChannel(type, channelName, channels) &&
      channelsWithActiveType.push(channels[channelName]);
  });
  return channelsWithActiveType;
};

export const sendEventForEachChannelOfTypeActive = ({
  name,
  type,
  idParams,
  payload,
  createdAt,
  config,
}) => {
  const channelsWithActiveType = getChannelsWithActiveType(
    type,
    config.EVENT_CHANNELS
  );
  const eventParams = {
    name,
    type,
    idParams,
    payload,
    createdAt: createdAt || Date.now(),
  }
  channelsWithActiveType.forEach((channel) => {
    config.EVENT_CHANNELS_FUNCTIONS[channel.id](eventParams);
  });
};

const isEventTypeActiveByChannel = (type, channel, channels) => {
  return channels[channel].activeEventTypes.find((el) => el === type);
};
