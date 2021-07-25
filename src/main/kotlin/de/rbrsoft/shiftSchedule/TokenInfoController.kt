package de.rbrsoft.shiftSchedule

import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier
import com.google.api.client.http.javanet.NetHttpTransport
import com.google.api.client.json.gson.GsonFactory
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import javax.ws.rs.core.Response

@RestController
@RequestMapping("/api/tokeninfo")
class TokenInfoController {

    private val jacksonFactory = GsonFactory()
    private val transport = NetHttpTransport.Builder().build()
    private val shiftScheduleGoogleClientId = listOf(
        "270938385499-f5jbqppbcn2r7m2sfmpsqaogr8a3sn9m.apps.googleusercontent.com"
    )

    @GetMapping
    fun getTokenInfo(@RequestHeader("Authorization") idToken: String): Response {

        val verifier = GoogleIdTokenVerifier.Builder(transport, jacksonFactory)
            .setAudience(shiftScheduleGoogleClientId)
            .build()
        val userToken = verifier.verify(idToken)

        return if (userToken != null)
            Response.ok(userToken).build()
        else
            Response.status(Response.Status.UNAUTHORIZED).build()
    }
}
