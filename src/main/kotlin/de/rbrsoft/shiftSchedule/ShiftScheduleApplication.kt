package de.rbrsoft.shiftSchedule

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ShiftScheduleApplication

fun main(args: Array<String>) {
	runApplication<ShiftScheduleApplication>(*args)
}
