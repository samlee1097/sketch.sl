class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stop_all_streams
    @game = Game.find(params[:id])
    stream_for @game
  end

  def receive(data)
    user = User.find_by(id: data['userId'])
    message = @game.messages.create(content: data['content'], user: user)
    MessagesChannel.broadcast_to(@game, MessageSerializer.new(message).serialized_json)
    MessageRelayJob.perform_later(message)
  end

  def unsubscribed
    stop_all_streams
  end
end
