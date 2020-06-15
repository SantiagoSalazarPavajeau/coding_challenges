require "pry"
steps = 8
path = "DDUUDDUU"

def counting_valleys(steps, path)
    hike = path.split("")
    elevation = 0
    valleys = 0
    hike.each do |step|
          if step == "U"
              elevation+=1
          elsif step == "D"
              if elevation == 0
                  valleys+=1
              end
              elevation-=1
          else
              elevation+=0
          end
    end
    valleys
end
counting_valleys(steps, path)