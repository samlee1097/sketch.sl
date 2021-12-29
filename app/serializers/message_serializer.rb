class MessageSerializer < ActiveModel::Serializer
    include FastJsonapi::ObjectSerializer
    attributes :content, :created_at
    belongs_to :game
    belongs_to :user
end
