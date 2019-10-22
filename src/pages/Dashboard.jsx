import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DashboardLayout } from '../components'
import { getUData } from '../actions'
import { calcAvgGpa } from '../utils'

const Dashboard = props => {
  const { user } = useSelector(store => store.User)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUData())
  }, [dispatch])

  console.log('user data in dashboard:', user)

  if (user.history) {
    console.log('score for one day:', calcAvgGpa(user.history, 1))
    console.log('score for three days:', calcAvgGpa(user.history, 3))
  }
  return (
    <DashboardLayout>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
      architecto tenetur sapiente iusto, recusandae sint commodi minima odit
      eligendi dolores fugit distinctio voluptatum tempore adipisci eveniet!
      Animi ad libero totam, unde mollitia iusto neque vel et distinctio dolore?
      Corrupti delectus est, asperiores accusantium maxime velit quia ipsa
      corporis commodi consequatur illum ea explicabo veritatis. Est placeat
      porro, officiis, voluptatum rem perspiciatis tempora maiores alias quam,
      hic fugiat! Iste cum rerum voluptatem nihil aspernatur pariatur optio
      error omnis eligendi, fugit eum. Quidem nobis labore explicabo rerum
      magnam laudantium accusantium perspiciatis praesentium repellat! Numquam
      ad cumque ullam sapiente, necessitatibus totam eum iste in eos ipsa
      officia id saepe veritatis! Numquam iste quasi in dolorem repudiandae.
      Ullam, ad! Incidunt suscipit vitae reprehenderit repellat tempore
      perferendis similique odit vero, consequuntur error magni voluptas
      repellendus maiores. Ea dignissimos debitis impedit amet officiis
      excepturi dolore odit. Fuga facere dolore a eligendi totam voluptatem sint
      quasi modi, sed sunt sapiente porro nam rerum error asperiores, in eaque
      ipsam id, quaerat assumenda? Adipisci mollitia possimus eligendi facilis
      eos quam nesciunt reiciendis tenetur officiis, sapiente repellendus
      doloribus laborum eum nostrum. Porro cum iste ea provident inventore,
      recusandae dignissimos unde minima quis quidem deleniti, iure maxime! Odio
      ipsa nobis nulla quod, alias sit at nam vero quasi est accusamus sunt
      quos? Sed quae est hic eaque veniam, ipsa autem dolore quidem ullam? Quam
      facere tempore perspiciatis harum, inventore dignissimos! Nesciunt
      molestiae, pariatur omnis voluptatem blanditiis quaerat voluptatibus
      soluta enim dignissimos vero hic harum consectetur tenetur veritatis
      dolorum mollitia vitae, atque doloribus ipsa quibusdam. Eaque tempora,
      harum molestias non tempore aperiam? Nostrum molestias, voluptas quibusdam
      dolores esse nisi quam consectetur necessitatibus ea, odio alias explicabo
      quae placeat commodi laudantium dolore sapiente, fugit aspernatur sequi
      veritatis voluptates totam! Quia minus neque quisquam quibusdam ipsam
      repellendus rerum soluta maxime est ab, mollitia ex explicabo dicta sed
      dolores quidem cum, quos reiciendis ullam numquam. Veritatis eaque nam
      perferendis expedita. Illum error temporibus totam rem animi cumque
      eveniet eaque, harum ut cupiditate eos tenetur tempore eligendi maiores
      amet, quidem esse modi? Accusantium rerum, tempora quod illo nemo incidunt
      nisi, quasi esse obcaecati facilis delectus perspiciatis sequi adipisci,
      quibusdam ad placeat natus? Provident quia blanditiis at? Voluptatem
      molestiae optio minima, atque amet voluptatum voluptates. Quibusdam ab
      architecto blanditiis. Dolorem deserunt dolore qui illum libero aliquam,
      doloremque eveniet adipisci nam accusamus, mollitia omnis in quisquam ipsa
      tempore iure debitis vitae. Quibusdam laboriosam qui, consequuntur
      aspernatur nostrum, numquam expedita necessitatibus quis, neque ex
      corrupti repudiandae! Cupiditate nesciunt, perferendis iste accusamus
      atque incidunt inventore unde repudiandae consequuntur debitis, odio illo
      eaque illum aliquam tempore ad officia qui! Sed voluptatibus minus
      tempora, labore voluptatem dolorum veritatis provident quo harum
      consequatur commodi! Neque similique eligendi mollitia! Perspiciatis porro
      nesciunt quisquam minus earum, quidem, assumenda, soluta iure sapiente
      consequatur voluptate corrupti! Quae eligendi tempora quo temporibus aut
      sed explicabo eaque vel molestias perspiciatis nemo dolorum, in tempore
      nihil dolores amet sunt facilis voluptas sit soluta quibusdam vero
      corrupti minus. Magni asperiores possimus recusandae enim provident,
      ducimus doloribus harum explicabo tempora nostrum placeat sequi.
      Accusantium obcaecati iusto eos doloremque consequuntur rerum quia
      assumenda ipsum cupiditate, exercitationem sapiente eveniet dicta dolorem
      laborum magni cumque facere culpa mollitia nostrum suscipit tempore atque!
      Quibusdam nemo sunt eveniet, necessitatibus optio non unde officiis,
      consequatur assumenda vel, fuga dolore rem incidunt illum? Velit cum porro
      hic sint rem repellendus temporibus tempora minima, qui labore, doloribus
      atque natus quia necessitatibus vero odio fugit quidem illum placeat odit
      eius corrupti nostrum! Neque voluptas est deleniti at, suscipit, dolorum
      quasi reprehenderit sed nisi dolore tempore maiores voluptate accusantium
      ipsum, ea impedit quas. Alias numquam quaerat fuga sed consequuntur error
      qui minus laborum minima accusamus. Porro magnam minus consectetur veniam
      dolorem hic eligendi id eveniet voluptas omnis! Dicta quidem assumenda
      totam ut facilis aliquid hic fuga quas fugit, corrupti maiores deleniti
      repellat recusandae quia modi facere libero veritatis! Dignissimos
      deserunt dicta laboriosam similique veniam voluptatibus officiis
      reprehenderit corporis. Et eius quo voluptate id perferendis repellendus
      in quis consectetur? Explicabo quasi, ex labore libero nam, neque
      asperiores corrupti voluptatum quos illum expedita quod a excepturi
      deleniti nisi! Laborum obcaecati nemo officia ut vero molestias dolores
      consectetur consequatur ipsa voluptatem dolorem tenetur architecto quae
      dolorum totam eveniet velit, deserunt eos vitae quos voluptate omnis? Odit
      mollitia accusamus quia asperiores architecto. Laboriosam quo,
      reprehenderit nulla officiis accusantium quae, cupiditate id illo
      voluptates aspernatur perspiciatis, at eius harum excepturi! Labore
      officia earum tempore excepturi sit molestias nobis beatae fugit rem.
      Ratione quod nulla ad a iste, ipsa aperiam dolores sed suscipit placeat
      aspernatur reiciendis fuga modi quae laudantium exercitationem dignissimos
      voluptas, omnis atque. Quo ad placeat necessitatibus similique, asperiores
      excepturi sed rem ipsum nostrum unde dicta consectetur sapiente maiores
      explicabo quia suscipit dolore odio qui rerum. Ratione, fuga
      necessitatibus ex repudiandae quos deserunt maiores enim sit modi suscipit
      in ducimus dolor accusamus fugiat obcaecati, commodi rem nulla? Mollitia
      impedit itaque veritatis, suscipit laboriosam voluptatem corrupti deleniti
      obcaecati iure quas. Soluta numquam fugiat ad ipsa quas molestias,
      mollitia officia eius quisquam sequi at quos, repudiandae doloremque!
      Explicabo possimus dolorum rem debitis placeat, iusto asperiores dolorem
      optio ea? Laborum labore cumque obcaecati illum! Deserunt, ut suscipit?
      Voluptate quisquam quas aspernatur molestias repudiandae nostrum ipsum
      voluptatum a quam voluptatibus? Quibusdam qui consequuntur, ducimus
      placeat harum iure optio odio voluptas vero dolores aut quidem assumenda
      ratione sunt nulla rem expedita quos. Dolorem aut voluptate quasi aliquam
      ratione! Magnam excepturi quae at adipisci modi maxime, error incidunt
      optio, impedit dolore sapiente sint exercitationem distinctio asperiores,
      debitis natus doloremque assumenda voluptates saepe facere reiciendis
      neque quisquam autem ut. Praesentium cumque sit possimus assumenda
      reiciendis laborum eligendi sint modi quas quasi fugiat, quisquam ipsum
      veritatis temporibus accusamus aliquam aspernatur illum repellendus
      tempora vero exercitationem. Sit quasi necessitatibus dignissimos
      nesciunt, eos nobis ducimus? Nam laboriosam ipsum perspiciatis totam
      laborum consequatur nihil incidunt! Saepe expedita itaque magnam
      perferendis veritatis eveniet nam asperiores odit autem adipisci,
      accusantium nisi quia beatae dolores ad libero? Provident eaque quisquam
      fugiat aspernatur aliquid, odit architecto, repellendus adipisci
      praesentium aut suscipit pariatur reprehenderit eveniet magnam iste
      perspiciatis voluptatem quis dignissimos eius.
    </DashboardLayout>
  )
}

export default Dashboard
