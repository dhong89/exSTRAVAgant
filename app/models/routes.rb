class Route < ApplicationRecord
    validates :route_name, :distance, :elevation, :coordinates, :estimated_move_time, :athlete_id, :transportation, presence: true
    validates :name, :uniqueness => { :scope => :athlete_id }
    validates :transportation, inclusion: {in: ['CYCLING', 'WALKING']}

    belongs to :athelte,
        primary_key: :id,
        foreign_key: :athlete_id,
        class_name: 'User'

end