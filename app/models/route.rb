class Route < ApplicationRecord
    validates :route_name, :distance, :elevation, :coordinates, :estimated_move_time, :athlete_id, :transportation, presence: true
    validates :route_name, :uniqueness => { :scope => :athlete_id }
    validates :transportation, inclusion: {in: ['CYCLING', 'RUNNING']}

    belongs_to :athlete,
        primary_key: :id,
        foreign_key: :athlete_id,
        class_name: :User

end