def jumping_clouds(clouds)
    jumps = 0
    index = 0
    clouds.each do |cloud|
    #         3             4
        if index < clouds.length - 2
            if clouds[index + 2] == 0
                jumps+= 1
                index+=2
            elsif clouds[index+2]== 1
                jumps+=1
                index+=1
            end
        elsif index == clouds.length - 2
            jumps+=1
            break
        end
    end

    puts jumps
end

jumping_clouds([0, 0, 0, 1, 0, 0])