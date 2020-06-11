import regex as re

str = "<div class="summary">
            <h3><a href="/questions/80407/about-power-supply-of-opertional-amplifier" class="question-hyperlink">about power supply of opertional amplifier</a></h3>
            <div class="excerpt">
                I am constructing an operational amplifier as shown in the following figure. I use a batter as supplier for the OP Amp and set it up as a non-inverting amp circuit. I saw that the output was clipped ...
            </div>

            <div class="tags t-op-amp">
                <a href="/questions/tagged/op-amp" class="post-tag" title="show questions tagged 'op-amp'" rel="tag">op-amp</a>

            </div>
            <div class="started fr">


        <div class="user-info ">
            <div class="user-action-time">


                        asked <span title="2013-08-27 21:49:14Z" class="relativetime">11 hours ago</span>
            </div>"


result = re.search(r'\d{5}/w+"$')           

print(result.group())