





function isEligibleToVote(age) {

    let reply = "Du får inte rösta ännu";

    if (age >= 18)
        reply = "Du får rösta";

    return reply;

}