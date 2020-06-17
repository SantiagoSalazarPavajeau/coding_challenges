
def repeated_strings(string, number)
     number_of_as = string.count('a')
     whole_times_to_repeat = number/string.size
     remainder = string[0, number % string.size].count('a')
     number_of_as * whole_times_to_repeat + remainder
end

repeated_strings("aba", 10)
