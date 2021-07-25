package de.rbrsoft.shiftSchedule

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api")
class ShiftScheduleRestController {

    @GetMapping("/users/{id}/teams")
    fun getTeamsForUser(
        @PathVariable(name = "id") userId: String
    ): List<TeamEto> {
        return listOf(
            TeamEto("1", "Das große Team"),
            TeamEto("bub", "Das Team vom Bub"),
            TeamEto("3", "Das kleine Team"),
        )
    }

    @GetMapping("/teams/{id}/members")
    fun getMembersForTeam(
        @PathVariable(name = "id") teamId: String
    ): List<MemberEto> {
        return if (teamId == "1")
            listOf(
                MemberEto("1", "Werner"),
                MemberEto("2", "Eckard"),
                MemberEto("3", "Röhrich")
            )
        else if (teamId == "bub") listOf(
            MemberEto("1", "Servus"),
            MemberEto("2", "Oide"),
            MemberEto("3", "Hüttn")
        )
        else emptyList()
    }
}

data class MemberEto(
    val id: String,
    val nickname: String
) {

}

data class TeamEto(
    val id: String,
    val teamName: String
) {

}
